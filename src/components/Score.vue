<template>
  <div class="scoreContainer">
    <div class="personalInfo">
      <p class="name">Hello, <span class="boldName">Mayank Jhavre</span></p>
      <p class="datetime">14 March, 2023</p>
      <div class="score">
        <p class="overall">Overall Sleep Quality</p>
        <div class="card">
          <div class="percent">
            <svg>
              <circle cx="105" cy="105" r="80"></circle>
              <circle cx="105" cy="105" r="80" style="--percent: 30"></circle>
            </svg>
            <div class="number">
              <p class="scoreValue">79</p>
            </div>
          </div>
          <div class="title">
            <p class="scoreRemark">Good</p>
          </div>
        </div>

        <!-- <p class="scoreValue">48</p> -->
        <!-- <p class="scoreRemark">Dangerous</p> -->
        <!-- <hr /> -->
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
  /* border: 1px solid black; */
  padding: 15px;
  height: 100%;
  background-color: #9dd4ed;
  border-radius: 15px;
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
  border-bottom: 1px solid black;
}

.overall {
  text-align: left;
  border-bottom: 1px solid black;
}

.card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background-color: #ffffff; */
  margin: 0 20px;
  /* width: 280px;
  height: 350px; */
  border-radius: 5px;
}

.card .percent {
  position: relative;
}

.card svg {
  position: relative;
  width: 210px;
  height: 210px;
  transform: rotate(-90deg);
}

.card svg circle {
  width: 100%;
  height: 100%;
  fill: none;
  stroke: #f0f0f0;
  stroke-width: 10;
  stroke-linecap: round;
}

.card svg circle:last-of-type {
  stroke-dasharray: 625px;
  stroke-dashoffset: calc(625px - (625px * var(--percent)) / 100);
  stroke: #66cc00;
}

.card .number {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card .number h3 {
  font-weight: 200;
  font-size: 3.5rem;
}

.card .number h3 span {
  font-size: 2rem;
}

.card .title h2 {
  margin: 25px 0 0;
}

.scoreValue {
  font-size: 3rem;
  font-weight: 700;
  /* margin-top: 30px; */
  margin: 0px;
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
