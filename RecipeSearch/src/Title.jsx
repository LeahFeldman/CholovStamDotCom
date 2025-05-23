import React from 'react';
import { useState, useEffect } from 'react';
import styles from './Title.module.css';

function Title({ title }){
    return <h2 className={ styles.title }>{ title }</h2>
};

export default Title;