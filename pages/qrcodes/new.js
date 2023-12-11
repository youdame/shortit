import Head from "next/head";
import QRCodeForm from "@/components/QRCodeForm";
import styles from "@/styles/QRCodeCreatePage.module.css";
import axios from "axios";

export default function QRCodeCreatePage() {
  async function handleSubmit(values) {
    await axios.post("/qrcodes", values);
    router.push("/qrcodes");
  }
  
  return (
    <>
      <Head>
        <title>새 QRCode 추가 - Shortit</title>
      </Head>
      <div className={styles.page}>
        <h1 className={styles.title}>새 QRCode 추가</h1>
        <QRCodeForm onSubmit={handleSubmit} />
      </div>
    </>
  );
}
