import React from "react";
import styles from "../../styles/LazyLettuce.module.css";

function LazyLettuce({ playerName }) {
  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c487e578f07f5ec9fbd8943659ee2c6d6990fbb4b60a1797b1b7c741207ea73?placeholderIfAbsent=true&apiKey=ccae87473a9f40e5900b0517bcb73d1d"
          className={styles.backgroundImage}
          alt="Background"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/64cf15865167dc85da5894265fb7f7ff4180db975ec6678c01b1625ba456f745?placeholderIfAbsent=true&apiKey=ccae87473a9f40e5900b0517bcb73d1d"
          className={styles.profileImage}
          alt="Profile"
        />
        <h1 className={styles.title}>{playerName}</h1>
        <div className={styles.statsContainer}>
          <div className={styles.seasonStats}>Season Stats</div>
        </div>
        <div className={styles.info}>
          <ul>Right - arm batsman</ul>
          <ul>Off - spinner</ul>
          <ul>Strike rate : 118</ul>
          <ul>Wickets : 73</ul>
          <ul>Last match : 52*</ul>
        </div>
      </section>
    </main>
  );
}

export default LazyLettuce;
