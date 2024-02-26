import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.heroSection}>
        <img src="" alt="Lab Picture" />
      </div>
      <div className={styles.labDescription}>
        <h2>About Our Virtual Lab</h2>
        <p>Good lab facilities and updated lab experiments are critical for any engineering college. Paucity of lab facilities often make it difficult to conduct experiments. Also, good teachers are always a scarce resource. The Virtual Labs project addresses this issue of lack of good lab facilities, as well as trained teachers, by providing remote-access to simulation-based Labs in various disciplines of science and engineering. Yet another objective is to arouse the curiosity of the students and permit them to learn at their own pace. This student-centric approach facilitates the absorption of basic and advanced concepts through simulation-based experimentation. Internet-based experimentation further permits use of additional web-resources, video-lectures, animated demonstrations and self-evaluation. Specifically, the Virtual Labs project addresses the following: </p>
        <div className="bullet">
          <ul>
            <li>Access to online labs to those engineering colleges that lack these lab facilities</li>
            <li>Access to online labs as a complementary facility to those colleges that already have labs</li>
            <li>Training and skill-set augmentation through workshops and on-site/ online training</li>
          </ul>
        </div>
        <p>Virtual labs are any place, any pace, any-time, any-type labs. It is a paradigm shift in student-centric, online education.</p>
      </div>

      <div className={styles.labDescription}>
        <h2>Labs</h2>
        <div className={styles.buttons}>
          <div className={styles.myButton}>
            <p>Operating System</p>
          </div>
          <div className={styles.myButton}>
            <p>AR/VR</p>
          </div>
        </div>
        <div className={styles.cards}>
          <img className={styles.card} src="assets\operating-system-t.jpg" alt="" />
          <img className={styles.card} src="https://placehold.co/600x200" alt="" />
        </div>
      </div>

    </>
  );
}
