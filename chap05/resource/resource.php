<?php
error_reporting(E_ALL & ~E_NOTICE);

try {
    $db = new PDO('mysql:host=localhost;dbname=angular;charset=utf8', 'angusr', 'angpass');

    switch ($_SERVER['REQEST_METHOD']) {
        case 'GET':
            if (is_null($_SERVER['PATH_INFO'])) {
                $stt = $db->query('select * from books order by published desc');
                print(json_encode($stt->fetchAll(PDO::FETCH_ASSOC)));
            } else {
                $stt = $db->prepare('select * from books where isbn = ?');
                $stt->bindValue(1, explode('/', $_SERVER['PATH_INFO'])[1]);
                $stt->execute();
                if ($row = $stt->fetch(PDO::FETCH_ASSOC)) {
                    print(json_decode($row));
                }
            }
            break;

        case 'POST':
            $input = file_get_contents('php://input');
            $decoded = json_decode($input);
            $stt = $db->prepare('insert into books(isbn, title, price, publish, published) values(?, ?, ?, ?, ?)');
            $stt->bindValue(1, $decoded->isbn);
            $stt->bindValue(2, $decoded->title);
            $stt->bindValue(3, $decoded->price);
            $stt->bindValue(4, $decoded->publish);
            $stt->bindValue(5, $decoded->published);
            $stt->execute();
            print($input);
            break;

        case 'PUT':
            $input = file_get_contents('php://input');
            $decoded = json_decode($input);
            $stt = $db->prepare('update books set title=?, price=?, publish=?, published=? where isbn=?');
            $stt->bindValue(1, $decoded->title);
            $stt->bindValue(2, $decoded->price);
            $stt->bindValue(3, $decoded->publish);
            $stt->bindValue(4, $decoded->published);
            $stt->bindValue(5, $decoded->isbn);
            $stt->execute();
            print($input);
            break;

        case 'DELETE':
            $isbn = explode('/', $_SERVER['PATH_INFO'])[1];
            $stt = $db->prepare('delete from books where isbn = ?');
            $stt->bindValue(1, $isbn);
            $stt->execute();
            print($isbn);
            break;

        default:
            break;
    }
} catch (PDOException $e) {
    die($e->getMessage());
}
$db = NULL;
