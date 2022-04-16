import Head from "next/head"
import Image from "next/image"
import styles from '../../styles/home.module.scss'

import logoImg from '../../public/logo.svg'

import {Input} from '../../src/components/ui/input'

export default function Home() {
  return (
    <>
    <Head>
      <title>Pizzaria login</title>
    </Head>
    <div className={styles.containerCenter}>
      <Image src={logoImg} alt="logo"/>

      <div className={styles.login}>
        <form action="">
          <Input placeholder="Digite seu email" type="text"/>
          <Input placeholder="Digite sua senha" type="password"/>
        </form>
      </div>
    </div>
    </>
  )
}
