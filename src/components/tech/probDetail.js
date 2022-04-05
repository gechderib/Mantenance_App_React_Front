function ProbDetail(props) {
  var problems = JSON.parse(localStorage.getItem("problemDetail"));
  return (
    <div>
      <div class="jumbotron" style={{height:"100%"}}>
        <h2 class="display-5">Reported by:{problems.sysUsername}!</h2>
        <p class="lead">
          <span>Reported Time</span>
          <br />
          {problems.time}
        </p>
        <p>{problems.isUserDisabled?"user is disabled":"User is not disabled"}</p>
        <hr class="my-4" />
        <div class="row">
          <div class="col">
            {"Item Type"}
            <ul>
              {problems.itemType.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
          </div>
          <div class="col">
            <ul>
              {"System Type"}
              {problems.sysType.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
          </div>
        </div>
        <p>{problems.reportedProblem}</p>
      </div>
    </div>
  );
}

export default ProbDetail;
