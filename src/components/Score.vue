<template>
  <div class="scoreContainer">
    <div class="personalInfo">
      <p class="name">Hello, <span class="boldName">Mayank Jhavre</span></p>
      <p class="datetime">14 March, 2023</p>
      <div class="score">
        <p class="scoreValue">48</p>
        <p class="scoreRemark">Dangerous</p>
        <hr />
      </div>
      <div class="tipZone">
        <div class="tip">
          <span class="tipTitle">Limit screen time:</span> The blue light
          emitted by electronic devices can disrupt your sleep, so try to avoid
          using them for at least an hour before bed.
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style>
.scoreContainer {
  text-align: left;
  border: 1px solid black;
  padding: 15px;
  height: 100%;
}

.name {
  font-size: 1.7em;
  margin: 0px;
}

.datetime {
  margin: 5px;
}

.boldName {
  font-weight: 500;
}

.score {
  text-align: center;
}

.scoreValue {
  font-size: 3rem;
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 0px;
}

.scoreRemark {
  font-size: 1em;
  margin-top: 5px;
  margin-bottom: 35px;
}

.tipZone {
  margin-top: 20px;
}

.tipTitle {
  font-weight: 500;
}
</style>
