import Button from "./Button";
import styles from "./HobbyView.module.css";

function HobbyView(props) {
  const handleWiki = (event) => {
    window.open(props.wikiLink);
  };

  const handleGoogle = (event) => {
    window.open("http://google.com/search?q=" + props.hobby);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.intro}>My new hobby will be: </h1>

      {props.hobby ? (
        <div className={styles.hobby}>
          <h2>{props.hobby}</h2>
          <div className={styles.learnMore}>
            <Button onClick={handleWiki} image='wiki.svg'>
              <p>Learn about {props.hobby}</p>
            </Button>
            <Button onClick={handleGoogle} image='google.png'>
              <p>Learn about {props.hobby}</p>
            </Button>
          </div>
        </div>
      ) : (
        <h2>Click the button below!</h2>
      )}
    </div>
  );
}
export default HobbyView;
