<?php

namespace  Model;

class Personas extends ActiveRecord {

    protected static $tabla = 'personas';
    protected static $columnasDB = ['id', 'document_number', 'first_name', 'middle_name', 'last_name', 'second_surname', 'birthdate', 'country_birth', 'gender', 'civil_status', 'id_type_document'];

    public function __construct($args = []) {
        $this->id = $args['id'] ?? null;
        $this->document_number = $args['document_number'] ?? '';
        $this->first_name = $args['first_name'] ?? '';
        $this->middle_name = $args['middle_name'] ?? '';
        $this->last_name = $args['last_name'] ?? '';
        $this->second_surname = $args['second_surname'] ?? '';
        $this->birthdate = $args['birthdate'] ?? '';
        $this->country_birth = $args['country_birth'] ?? '';
        $this->gender = $args['gender'] ?? '';
        $this->civil_status = $args['civil_status'] ?? '';
        $this->id_type_document = $args['id_type_document'] ?? '';
    }

    public function validarPersona() {
        
        if( !$this->document_number ) {
            self::$alertas['error'][] = 'El Numero del documento es obligatorio';
        }

        if( !$this->first_name ) {
            self::$alertas['error'][] = 'El Nombre es obligatorio';
        }

        if( !$this->middle_name ) {
            self::$alertas['error'][] = 'El Segundo Nombre es obligatorio';
        }

        if( !$this->last_name ) {
            self::$alertas['error'][] = 'El Apellido es obligatorio';
        }

        if( !$this->second_surname ) {
            self::$alertas['error'][] = 'El Segundo Apellido es obligatorio';
        }

        if( !$this->birthdate ) {
            self::$alertas['error'][] = 'La fecha de nacimiento es obligatoria';
        }

        if( !$this->country_birth ) {
            self::$alertas['error'][] = 'El Lugar de nacimiento es obligatorio';
        }

        if( !$this->gender ) {
            self::$alertas['error'][] = 'El Genero es obligatorio';
        }

        if( !$this->civil_status ) {
            self::$alertas['error'][] = 'El Estado Civil es obligatorio';
        }

        if( !$this->id_type_document ) {
            self::$alertas['error'][] = 'El Genero es obligatorio';
        }


    }

}

?>