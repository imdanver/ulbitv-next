import Link from "next/link";
import styles from '../styles/MyLink.module.css'
import React from "react";

export default function({text, href}) {

    return (
        <Link href={href} className={styles.link}>
            {text}
        </Link>
    )
}