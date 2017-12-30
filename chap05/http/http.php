<?php

$name = $_GET['name'];

if (empty($name)) {
    header('HTTP/1.1 500 Internal Server Error');
} else {
    print("こんにちは、{$name}さん！");
}