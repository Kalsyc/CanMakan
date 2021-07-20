<script lang="ts">
  import { afterUpdate } from 'svelte';

  let recoveredNumber: number = 0;
  let negativeNumber: number = 0;
  let vaccinatedNumber: number = 0;
  let othersNumber: number = 0;
  let childNumber: number = 0;
  let totalNumber: number = 0;

  const selectElement = (e: MouseEvent) => {
    const targetElement: HTMLImageElement = e.target as HTMLImageElement;
    switch (targetElement.id) {
      case 'recovered':
        modifyRecovered(targetElement);
        break;
      case 'negative':
        modifyNegative(targetElement);
        break;
      case 'vaccinated':
        modifyVaccinated(targetElement);
        break;
      case 'others':
        modifyOthers(targetElement);
        break;
      case 'child':
        modifyChild(targetElement);
        break;
      default:
        console.log('Wrong id?');
    }
  };

  const modifyRecovered = (target: HTMLImageElement) => {
    if (target.classList.toggle('unselected')) {
      recoveredNumber -= 1;
    } else {
      recoveredNumber += 1;
    }
  };

  const modifyNegative = (target: HTMLImageElement) => {
    if (target.classList.toggle('unselected')) {
      negativeNumber -= 1;
    } else {
      negativeNumber += 1;
    }
  };

  const modifyVaccinated = (target: HTMLImageElement) => {
    if (target.classList.toggle('unselected')) {
      vaccinatedNumber -= 1;
    } else {
      vaccinatedNumber += 1;
    }
  };

  const modifyOthers = (target: HTMLImageElement) => {
    if (target.classList.toggle('unselected')) {
      othersNumber -= 1;
    } else {
      othersNumber += 1;
    }
  };

  const modifyChild = (target: HTMLImageElement) => {
    if (target.classList.toggle('unselected')) {
      childNumber -= 1;
    } else {
      childNumber += 1;
    }
  };
</script>

<main>
  <div class="checker-header">
    Select Your Dining Group
    <img class="dropdown" src="./images/dropdown.png" alt="" />
  </div>
  <div class="circle"><span>{recoveredNumber + negativeNumber + vaccinatedNumber + othersNumber + childNumber}</span></div>
  <div class="checker-body">
    <div class="selectable-div">
      <div class="selectable-grid grid-six">
        <img class="unselected" src="./images/recovered.png" alt="" id="recovered" on:click={(e) => selectElement(e)} />
        <img class="unselected" src="./images/recovered.png" alt="" id="recovered" on:click={(e) => selectElement(e)} />
        <img class="unselected" src="./images/recovered.png" alt="" id="recovered" on:click={(e) => selectElement(e)} />
        <img class="unselected" src="./images/recovered.png" alt="" id="recovered" on:click={(e) => selectElement(e)} />
        <img class="unselected" src="./images/recovered.png" alt="" id="recovered" on:click={(e) => selectElement(e)} />
        <img class="unselected" src="./images/recovered.png" alt="" id="recovered" on:click={(e) => selectElement(e)} />
      </div>
      <span class="select-caption">AGED 13+, RECOVERED IN PAST 270 DAYS</span>
    </div>
    <div class="selectable-div">
      <div class="selectable-grid grid-six">
        <img class="unselected" src="./images/negative.png" alt="" id="negative" on:click={(e) => selectElement(e)} />
        <img class="unselected" src="./images/negative.png" alt="" id="negative" on:click={(e) => selectElement(e)} />
        <img class="unselected" src="./images/negative.png" alt="" id="negative" on:click={(e) => selectElement(e)} />
        <img class="unselected" src="./images/negative.png" alt="" id="negative" on:click={(e) => selectElement(e)} />
        <img class="unselected" src="./images/negative.png" alt="" id="negative" on:click={(e) => selectElement(e)} />
        <img class="unselected" src="./images/negative.png" alt="" id="negative" on:click={(e) => selectElement(e)} />
      </div>
      <span class="select-caption">AGED 13+, TESTED COVID-19-NEGATIVE IN PAST 24 HRS</span>
    </div>
    <div class="selectable-div">
      <div class="selectable-grid grid-six">
        <img class="unselected" src="./images/vaccinated.png" alt="" id="vaccinated" on:click={(e) => selectElement(e)} />
        <img class="unselected" src="./images/vaccinated.png" alt="" id="vaccinated" on:click={(e) => selectElement(e)} />
        <img class="unselected" src="./images/vaccinated.png" alt="" id="vaccinated" on:click={(e) => selectElement(e)} />
        <img class="unselected" src="./images/vaccinated.png" alt="" id="vaccinated" on:click={(e) => selectElement(e)} />
        <img class="unselected" src="./images/vaccinated.png" alt="" id="vaccinated" on:click={(e) => selectElement(e)} />
        <img class="unselected" src="./images/vaccinated.png" alt="" id="vaccinated" on:click={(e) => selectElement(e)} />
      </div>
      <span class="select-caption">AGED 13+, FULLY VACCINATED</span>
    </div>
    <div class="selectable-div">
      <div class="selectable-grid grid-six">
        <img class="unselected" src="./images/others.png" alt="" id="others" on:click={(e) => selectElement(e)} />
        <img class="unselected" src="./images/others.png" alt="" id="others" on:click={(e) => selectElement(e)} />
        <img class="unselected" src="./images/others.png" alt="" id="others" on:click={(e) => selectElement(e)} />
        <img class="unselected" src="./images/others.png" alt="" id="others" on:click={(e) => selectElement(e)} />
        <img class="unselected" src="./images/others.png" alt="" id="others" on:click={(e) => selectElement(e)} />
        <img class="unselected" src="./images/others.png" alt="" id="others" on:click={(e) => selectElement(e)} />
      </div>
      <span class="select-caption">AGED 13+, OTHERS</span>
    </div>
    <div class="selectable-div">
      <div class="selectable-grid grid-five">
        <img class="unselected" src="./images/child.png" alt="" id="child" on:click={(e) => selectElement(e)} />
        <img class="unselected" src="./images/child.png" alt="" id="child" on:click={(e) => selectElement(e)} />
        <img class="unselected" src="./images/child.png" alt="" id="child" on:click={(e) => selectElement(e)} />
        <img class="unselected" src="./images/child.png" alt="" id="child" on:click={(e) => selectElement(e)} />
        <img class="unselected" src="./images/child.png" alt="" id="child" on:click={(e) => selectElement(e)} />
      </div>
      <span class="select-caption">AGED 0-12</span>
    </div>
  </div>
</main>

<style>
  main {
    background-color: #e5e5e5;
    min-height: 100vh;
  }

  .dropdown {
    position: absolute;
    right: 15px;
    top: 5px;
    width: 15px;
    height: 15px;
  }

  .checker-body {
    padding: 20px 0;
  }

  .selectable-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .selectable-grid {
    display: grid;
    grid-column-gap: 10px;
  }

  .grid-six {
    grid-template-columns: repeat(6, 1fr);
  }

  .grid-five {
    grid-template-columns: repeat(5, 1fr);
  }

  .select-caption {
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    font-size: 0.55rem;
    margin: 10px 0;
  }

  .unselected {
    opacity: 0.15;
  }

  .circle {
    position: absolute;
    width: 45px;
    height: 45px;
    left: 10px;
    top: 15px;
    background: #ffffff;
    border-radius: 50%;
    text-align: center;
    border: 1px solid #000000;
    box-sizing: border-box;
    font-size: 1.25rem;
    line-height: 45px;
    font-family: 'Nunito', sans-serif;
    font-weight: 900;
  }

  .checker-header {
    min-width: 100vw;
    text-align: center;
    background-color: blue;
    color: #ededed;
    font-size: 1.25rem;
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
  }
</style>
