<?php
$n = $_GET['name'];

if (empty($n)) {
    header('HTTP/1.1 500 Internal Server Error');
} else {
    print('こんにちは、' . $n . 'さん');
}