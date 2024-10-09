import Head from "next/head";
import styles from "@/styles/Home.module.css"; 

export default function Home() {
  return (
    <>
      <Head>
        <title>My Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* import link của Font Awesome để xài icon */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* NỘI DUNG CẢ TRANG*/}
      <div className={styles.container}>

        {/* NAVBAR */}
        <nav className={styles.nav}>

          {/* Logo */}
          <div className={styles.logo}>
            <img src="/images/logo.png" />
          </div>

          {/* Các mục trong Navbar */}
          <ul>
            <li>Home</li>   
            <li>About</li>
            <li>Menu</li>
            <li>Order</li>
          </ul>

          {/* Icon tìm kiếm, giỏ hàng, user. Vào Font Awesome copy link của icon mình muốn dùng*/}
          <div className={styles.icon}>
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-circle-user"></i>
          </div>
        </nav>

        {/* MAIN */}
        <div className={styles.main}>

          {/* ----LEFT---- */}
          <div className={styles.left}>

            {/* Tiêu đề */}
            <div className={styles.tittle}>
              <h1>Get Fresh<span>Food</span></h1>   {/*Chữ Food có kiểu khác nên đưa vào <span> để dễ css*/}           
              <h1>in a Easy Way</h1>
            </div>

            {/* Mô tả */}
            <p className={styles.description}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse reiciendis quaerat nobis 
                deleniti amet non inventore. Reprehenderit recusandae voluptatibus minus tenetur itaque numquam 
                cum quos dolorem maxime. Quas, quaerat nisi. Lorem ipsum dolor sit, amet consectetur adipisicing 
                elit. Cumque facilis, quaerat cupiditate nulla quibusdam quo sunt esse tempore inventore vel 
                voluptate, amet laudantium adipisci veniam nihil quam molestiae omnis mollitia.
            </p>

            {/* Button */}
            <button className={styles.btn}>Order now</button> 
          </div>

          {/* ----RIGHT---- */}
          <div className={styles.right}>
            <img src="images/main_img.png"/>
          </div>

        </div>      
      </div>
    </>
  );
}