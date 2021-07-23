<script lang="ts">
  import { afterUpdate } from 'svelte';
  import AdultGrid from '../components/AdultGrid.svelte';
  import ChildGrid from '../components/ChildGrid.svelte';
  import ToggleHousehold from '../components/ToggleHousehold.svelte';

  let recoveredNumber: number = 0;
  let negativeNumber: number = 0;
  let vaccinatedNumber: number = 0;
  let othersNumber: number = 0;
  let childNumber: number = 0;
  let startCondition: boolean = false;
  let isDropdownShown: boolean = false;
  let canMakan: boolean = false;
  let isSameHousehold: boolean = false;

  afterUpdate(() => {
    const statusElement: HTMLSpanElement = document.getElementById('status') as HTMLSpanElement;
    const checkerHeaderElement: HTMLDivElement = document.getElementById('checker-header') as HTMLDivElement;
    if (recoveredNumber + negativeNumber + vaccinatedNumber + othersNumber + childNumber === 0) {
      checkerHeaderElement.style.color = '#EDEDED';
      checkerHeaderElement.style.backgroundColor = '#000000';
      statusElement.textContent = 'Select Your Dining Group';
      startCondition = false;
    }
    if (startCondition) {
      checkerHeaderElement.style.color = '#000000';
      canMakan = checkCanMakan();
      if (canMakan) {
        statusElement.textContent = 'Group Dine-In? YES*';
        checkerHeaderElement.style.backgroundColor = '#00FF75';
      } else {
        statusElement.textContent = 'Group Dine-In? NO*';
        checkerHeaderElement.style.backgroundColor = '#FF5C00';
      }
    }
  });

  const directToStuck = (): void => {
    location.href = 'https://www.stuck.sg/';
  };

  const checkCanMakan = (): boolean => {
    //return false;
    const totalNumber: number = recoveredNumber + negativeNumber + vaccinatedNumber + othersNumber + childNumber;
    const adultNumber: number = recoveredNumber + negativeNumber + vaccinatedNumber + othersNumber;
    //If total exceeds 5 or no. of children is 5 and more.
    if (totalNumber > 5 || childNumber >= 5) {
      return false;
    }
    //If total number is less than or equal 2.
    if (totalNumber <= 2) {
      return true;
    }
    //If total numnber is in between 2 and 5
    if (totalNumber > 2) {
      //If there's someone unvaccinated, they can't join
      if (othersNumber > 0) {
        return false;
      }
      //If they are not from the same household and the number of children exceeds the number of vaccinated adults
      if (!isSameHousehold && childNumber > adultNumber) {
        return false;
      }
      return true;
    }
    return false;
  };

  const modifyRecovered = (i: number): void => {
    if (!startCondition) {
      startCondition = true;
    }
    if (document.getElementById('recovered' + i).classList.toggle('unselected')) {
      recoveredNumber -= 1;
    } else {
      recoveredNumber += 1;
    }
  };

  const modifyNegative = (i: number): void => {
    if (!startCondition) {
      startCondition = true;
    }
    if (document.getElementById('negative' + i).classList.toggle('unselected')) {
      negativeNumber -= 1;
    } else {
      negativeNumber += 1;
    }
  };

  const modifyVaccinated = (i: number): void => {
    if (!startCondition) {
      startCondition = true;
    }
    if (document.getElementById('vaccinated' + i).classList.toggle('unselected')) {
      vaccinatedNumber -= 1;
    } else {
      vaccinatedNumber += 1;
    }
  };

  const modifyOthers = (i: number): void => {
    if (!startCondition) {
      startCondition = true;
    }
    if (document.getElementById('others' + i).classList.toggle('unselected')) {
      othersNumber -= 1;
    } else {
      othersNumber += 1;
    }
  };

  const modifyChild = (i: number): void => {
    if (!startCondition) {
      startCondition = true;
    }
    if (document.getElementById('child' + i).classList.toggle('unselected')) {
      childNumber -= 1;
    } else {
      childNumber += 1;
    }
  };

  const showDropdown = (e: MouseEvent): void => {
    const targetElement: HTMLImageElement = e.target as HTMLImageElement;
    isDropdownShown = !isDropdownShown;
    targetElement.style.transform = targetElement.style.transform ? '' : 'rotate(180deg)';
  };
</script>

<main>
  <div id="checker-header" class="checker-header">
    <span id="status"> Select Your Dining Group </span>

    {#if startCondition}
      <img class="dropdown" src="./images/dropdown.png" alt="" on:click={(e) => showDropdown(e)} />
    {/if}

    {#if isDropdownShown}
      {#if canMakan}
        <div id="dropdown-text-div" class="dropdown-text-div canMakan">
          <div class="text-div">
            <span class="disclaimer-text">
              *Based on what we currently know from the way the official sources calculates this, your group might be allowed to dine-in together.
              Please double-check your results with the official government websites, and do not take this as medical advice. We do not represent the
              government, nor the latest rules.
            </span>
            <span class="mood-text"> We’re happy for you, friend. </span>
            <span class="caption-text">
              Do remember that it is still safer for you to avoid eating out in groups and you’ll minimize the risk to your family members.
            </span>
            <span class="final-text"> Let’s press on together, get vaccinated early, and stay safe. </span>
            <div class="stuck-text" on:click={() => directToStuck()}>With love, from STUCK Design</div>
          </div>
        </div>
      {:else}
        <div id="dropdown-text-div" class="dropdown-text-div cannotMakan">
          <div class="text-div">
            <span class="disclaimer-text">
              *Based on what we currently know from the way the official sources calculates this, your group might be allowed to dine-in together.
              Please double-check your results with the official government websites, and do not take this as medical advice. We do not represent the
              government, nor the latest rules.
            </span>
            <span class="mood-text"> We’re sad too, friend. </span>
            <span class="caption-text">
              However, this is best for you and your loved ones. You’ll minimize the risk to your family members. There will be brighter days ahead.
            </span>
            <span class="final-text"> Let’s press on together, get vaccinated early, and stay safe. </span>
            <div class="stuck-text" on:click={() => directToStuck()}>With love, from STUCK Design</div>
          </div>
        </div>
      {/if}
    {/if}
  </div>
  {#if startCondition && !isDropdownShown}
    <div class="circle"><span>{recoveredNumber + negativeNumber + vaccinatedNumber + othersNumber + childNumber}</span></div>
  {/if}
  <div class="checker-body">
    <div class="selectable-div">
      <AdultGrid onChange={modifyRecovered} type="recovered" image="./images/recovered-selected.png" />
      <span class="select-caption">AGED 13+, RECOVERED IN PAST 270 DAYS</span>
    </div>
    <div class="selectable-div">
      <AdultGrid onChange={modifyNegative} type="negative" image="./images/negative-selected.png" />
      <span class="select-caption">AGED 13+, TESTED COVID-19-NEGATIVE IN PAST 24 HRS</span>
    </div>
    <div class="selectable-div">
      <AdultGrid onChange={modifyVaccinated} type="vaccinated" image="./images/vaccinated-selected.png" />
      <span class="select-caption">AGED 13+, FULLY VACCINATED</span>
    </div>
    <div class="selectable-div">
      <AdultGrid onChange={modifyOthers} type="others" image="./images/others-selected.png" />
      <span class="select-caption">AGED 13+, OTHERS</span>
    </div>
    <div class="selectable-div">
      <ChildGrid onChange={modifyChild} type="child" image="./images/child-selected.png" />
      <span class="select-caption">AGED 0-12</span>
    </div>
    <div class="selectable-div">
      <ToggleHousehold bind:isSameHousehold />
      <span class="select-caption">EVERYONE FROM SAME HOUSEHOLD?</span>
    </div>
  </div>
</main>

<style>
  main {
    background-color: #e5e5e5;
    min-height: 100vh;
  }

  .canMakan {
    background-color: #002d15;
  }

  .cannotMakan {
    background-color: #400400;
  }

  .dropdown {
    position: absolute;
    right: 15px;
    top: 0.5em;
    width: 15px;
    height: 15px;
  }

  .dropdown-text-div {
    position: absolute;
    z-index: 2;
    min-width: 100vw;
    text-align: center;
    color: #ededed;
    font-family: 'Nunito', sans-serif;
    opacity: 0.9;
  }

  .text-div {
    padding: 1em 0.5em;
    line-height: 1em;
    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }

  .disclaimer-text {
    font-weight: 400;
    font-size: 0.75rem;
    margin: 0.5em 0;
  }

  .mood-text {
    font-weight: 700;
    font-size: 1rem;
    margin: 0.5em 0;
  }

  .caption-text {
    font-weight: 400;
    font-size: 1rem;
    margin: 0.5em 0;
  }

  .final-text {
    font-weight: 700;
    font-size: 1rem;
    margin: 0.5em 0;
  }

  .stuck-text {
    background-color: inherit;
    padding: 1em;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 60px;
    width: fit-content;
    font-weight: 400;
    font-size: 0.75rem;
    margin: 1em 0;
    opacity: 1;
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

  .select-caption {
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    font-size: 0.55rem;
    margin: 10px 0;
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
    background-color: black;
    color: #ededed;
    font-size: 1.25rem;
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    height: 2em;
    line-height: 2em;
  }

  @media screen and (min-width: 1440px) {
    .disclaimer-text {
      font-size: 1rem;
    }

    .mood-text {
      font-size: 1.5rem;
    }

    .caption-text {
      font-size: 1.5rem;
    }

    .final-text {
      font-size: 1.5rem;
    }

    .select-caption {
      font-size: 0.75rem;
    }

    .selectable-div {
      margin: 1em 0;
    }
  }
</style>
