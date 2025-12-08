export default function Education() {
  return (
    <>
      <title>Education - Louise Aldridge</title>
      <section className="education-section">
        <h2>Education</h2>

        <div className="details-section-green">
          <h3>Software Development Tech Finishing School Bootcamp</h3>
          <p className="detail-sub">TechNative Digital</p>
          <p className="small-text"> September - December 2025 </p>
          <ul>
            <li>
              <span className="bold-text">JavaScript</span> fundamentals,
              <span className="bold-text"> API </span>
              handling
            </li>
            <li>
              <span className="bold-text">React</span> and state management
              libraries such as <span className="bold-text">Redux</span> and
              <span className="bold-text"> Zustand</span>
            </li>
            <li>
              Version control and team collaboration with
              <span className="bold-text"> Git</span> and
              <span className="bold-text"> GitHub</span>
            </li>
          </ul>
        </div>
        <div className="details-section-green">
          <h3>Master of Arts - Digital Media</h3>
          <p className="detail-sub">University of Sussex</p>
          <p className="small-text"> 2018 - 2019 </p>
          <ul>
            <li>Grade: Distinction</li>
          </ul>
        </div>

        <div className="details-section-purple">
          <h3>Bachelor of Arts with Honours - Media</h3>
          <p className="detail-sub">University of Chichester</p>
          <p className="small-text"> 2014 - 2017</p>
          <ul>
            <li>Grade: 2:1</li>
          </ul>
        </div>
      </section>
    </>
  );
}
