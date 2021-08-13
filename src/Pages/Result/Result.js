import { Button } from "@material-ui/core";

import "./Result.css";

const Result = ({ name, score }) => {
  return (
    <div className="result">
      <span className="title">
        {name}'s Score : {score}/10
      </span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default Result;
