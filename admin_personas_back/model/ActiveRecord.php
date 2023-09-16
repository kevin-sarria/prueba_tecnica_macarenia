<?php

namespace Model;

class ActiveRecord {

    protected static $db;
    protected static $tabla = '';
    protected static $columnasDB = [];

    // Alertas y Mensajes
    protected static $alertas = [];

    public static function setDB( $database ) {
        self::$db = $database;
    }

    // Setear un tipo de Alertas
    public static function setAlerta( $tipo, $mensaje ) {
        static::$alertas[$tipo][] = $mensaje;
    }

    // Obtener alertas
    public static function getAlertas() {
        return static::$alertas;
    }

    public function validar() {
        static::$alertas = [];
        return static::$alertas;
    }

    public static function consultarSQL($query) {

        // Consultar la base de datos
        $resultado = self::$db->query($query);

        // Iterar los resultados
        $array = [];
        while( $registro = $resultado->fetch_assoc() ) {
            $array[] = static::crearObjeto($registro);
        }

        // liberar la memoria
        $resultado->free();

        // Retornar los resultados
        return $array;

    }

    protected static function crearObjeto($registro) {

        $objeto = new static;

        foreach( $registro as $key => $value ) {
            if( property_exists( $objeto, $key ) ) {
                $objeto->$key = $value;
            }
        }

        return $objeto;

    }

    public function atributos() {
        $atributos = [];
        foreach( static::$columnasDB as $columna ) {
            if( $columna === 'id' ) continue;
            $atributos[$columna] = $this->$columna;
        }
        return $atributos;
    }

    public function sanitizarAtributos() {
        $atributos = $this->atributos();
        $sanitizado = [];
        foreach( $atributos as $key => $value ) {
            $sanitizado[$key] = self::$db->escape_string($value);
        }
        return $sanitizado;
    }

    public function sincronizar($args=[]) {
        foreach( $args as $key => $value ) {
            if( property_exists($this, $key) && !is_null($value) ) {
                $this->$key = $value;
            }
        }
    }

    public function guardar() {
        $resultado = '';
        if( !is_null($this->id) ) {
            // Atualizar
            $resultado = $this->actualizar();
        } else {
            // Creando un nuevo registro
            $resultado = $this->crear();
        }
        return $resultado;
    }

    // Obtener todos los registros
    public static function all( string $orden = 'DESC' ) {
        $query = "SELECT * FROM " . static::$tabla . " ORDER BY id ${orden}";
        $resultado = self::consultarSQL($query);
        return $resultado;
    }

    public static function find( $id ) {
        $query = "SELECT * FROM " . static::$tabla . " WHERE id = ${id}";
        $resultado = self::consultarSQL($query);
        return array_shift($resultado);
    }

    public static function get( $limite ) {
        $query = "SELECT * FROM " . static::$tabla . " ORDER BY id DESC LIMIT ${limite}";
        $resultado = self::consultarSQL($query);
        return $resultado;
    }

    public static function where($columna, $valor) {
        $query = "SELECT * FROM " . static::$tabla . " WHERE ${columna} = '${valor}'";
        $resultado = self::consultarSQL($query);
        return array_shift( $resultado ) ;
    }

    public static function whereDoubleDate($columna, $valor, $valor2) {
        $query = "SELECT * FROM " . static::$tabla . " WHERE ${columna} BETWEEN '${valor}' AND '${valor2}'  ";
        $resultado = self::consultarSQL($query);
        return $resultado;
    }

    public static function filterTaskForPerson($second_table, $columna, $columna2, $valor, $valor2) {
        $query = "SELECT " . static::$tabla . ".id, title, description, limit_date, id_person, document_number, id_type_document FROM " . static::$tabla . " INNER JOIN ${second_table} ON "  . static::$tabla . ".id_person = ${second_table}.id WHERE ${second_table}.${columna} = '${valor}' AND ${second_table}.${columna2} = ${valor2}";
        $resultado = self::consultarSQL($query);
        return $resultado;
    }

    // Crea un nuevo registro
    public function crear() {
        // Sanitizar los datos
        $atributos = $this->sanitizarAtributos();

        // Insertar en la base de datos
        $query = " INSERT INTO " . static::$tabla . " ( ";
        $query .= join( ', ', array_keys($atributos) );
        $query .= " ) VALUES (' ";
        $query .= join( "', '", array_values($atributos) );
        $query .= " ') ";

        // Resultado de la consulta
        $resultado = self::$db->query($query);
        return [
            'resultado' => $resultado,
            'id' => self::$db->insert_id
        ];
    }

    // Actualizar el registro
    public function actualizar() {

        // Sanitizar los datos
        $atributos = $this->sanitizarAtributos();

        // Iterar para ir agregando cada campo de la BD
        $valores = [];
        foreach( $atributos as $key => $value ) {
            $valores[] = "{$key}='{$value}'";
        }

        // Consulta SQL
        $query = "UPDATE " . static::$tabla . " SET " ;
        $query .= join( ', ', $valores );
        $query .= " WHERE id = '" . self::$db->escape_string($this->id) . "' ";
        $query .= " LIMIT 1";

        // Actualizar BD
        $resultado = self::$db->query($query);
        return $resultado;
    }

    // Eliminar un registro por su ID
    public function eliminar() {
        $query = "DELETE FROM " . static::$tabla . " WHERE id = " . self::$db->escape_string($this->id) . " LIMIT 1";
        $resultado = self::$db->query($query);
        return $resultado;
    }


}

?>