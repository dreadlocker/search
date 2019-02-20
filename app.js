window.onload = function () {
  const button = document.getElementsByTagName('button')[0];
  button.addEventListener('click', buttonClicked);
  window.addEventListener('keyup', () => (event.keyCode === 13) ? buttonClicked() : '');

  const input = document.getElementsByTagName('input')[0];
  const dataArr = document.getElementsByClassName('data');

  function buttonClicked() {
    //#region remove previous highlight
    const selectedArr = Array.from(document.getElementsByClassName('selected'));
    for (let y = 0; y < selectedArr.length; y++) {
      const div = selectedArr[y];
      div.className = '';
    }
    //#endregion

    const inputValue = input.value.trim();
    if (inputValue !== '') {
      //#region add new highligh
      for (let i = 0; i < dataArr.length; i++) {
        const div = dataArr[i];
        if (div.innerHTML.match(inputValue) !== null) {
          div.parentElement.className = 'selected';
        }
      }
      //#endregion
    }

    input.value = '';
    input.focus();
  }
};