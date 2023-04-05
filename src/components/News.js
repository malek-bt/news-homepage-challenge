import styles from "@/styles/Home.module.css";

const News = () => {
  return (
    <section section className={styles.global}>
      <div className={styles.News} id="home">
        <img src="/image-web-3-mobile.jpg" className={styles.mobile_img}></img>
        <img
          src="/image-web-3-desktop.jpg"
          className={styles.desktop_img}
        ></img>
        <h1>The Bright Future of Web 3.0?</h1>
        <div>
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button>READ MORE</button>
        </div>
      </div>

      <div className={styles.list_News} id="news">
        <h2>New</h2>
        <h3>Hydrogen VS Electric Cars</h3>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>

        <hr />

        <h3>The Downsides of AI Artistry</h3>
        <p>
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>

        <hr />

        <h3>Is VC Funding Drying Up?</h3>
        <p>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
      <div className={styles.suggestions} id="trending">
        <div className={styles.sugg_div}>
          <img src="/image-retro-pcs.jpg"></img>
          <div>
            <span>01</span>
            <h4>Reviving Retro PCs</h4>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>

        <div className={styles.sugg_div}>
          <img src="/image-top-laptops.jpg"></img>
          <div>
            <span>02</span>
            <h4>Top 10 Laptops of 2022</h4>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </div>

        <div className={styles.sugg_div}>
          <img src="/image-gaming-growth.jpg"></img>
          <div>
            <span>03</span>
            <h4>The Growth of Gaming</h4>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
