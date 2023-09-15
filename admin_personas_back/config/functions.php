<?php

function pagina_actual( $path ): bool {
    return str_contains( $_SERVER['PATH_INFO'] ?? '/', $path ) ? true : false;
}

function debbuguear( $variable ): void {
    echo "<pre>";
    var_dump($variable);
    echo "</pre>";
}

?>