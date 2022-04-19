import Head from "next/head"
import Image from "next/image"
import styles from '../../styles/home.module.scss'

import logoImg from '../../public/logo.svg'

import {Input} from '../../src/components/ui/input'
import {Button} from '../../src/components/ui/button'

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
          <Button type="submit" loading={false}>Acessar </Button>
        </form>
        <a className={styles.text}>Não possui uma conta? Cadastre-se</a>
      </div>
    </div>
    </>
  )
}
