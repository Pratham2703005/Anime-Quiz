/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jersey: ['"Jersey 15"', 'sans-serif !important'], // Add the Jersey font
      },
      colors: {
        'nav-text': 'var(--nav-text)',
        'right-nav-text': 'var(--right-nav-text)',
        'right-nav-bg':'var(--right-nav-bg)',
        'right-nav-heading':'var(--right-nav-heading)',
        'right-nav-current-item':'var(--right-nav-current-item)',
        'right-nav-next-item':'var(--right-nav-next-item)',
        'right-nav-loose-item':'var(--right-nav-loose-item)',
        'right-nav-current-itemText':'var(--right-nav-current-itemText)',
        'right-nav-itemText':'var(--right-nav-itemText)',
        'right-nav-item':'var(--right-nav-item)',
        'right-nav-currentTag-item':'var(--right-nav-currentTag-item)',
        'right-nav-nextTag-item':'var(--right-nav-nextTag-item)',
        'right-nav-looseTag-item':'var(--right-nav-looseTag-item)',
        'right-nav-Tag-itemText':'var(--right-nav-Tag-itemText)',

        'operateBtn-text':'var(--operateBtn-text)',
        'operateBtn-focus':'var(--operateBtn-focus)',
        'operateBtn-active-to':'var(--operateBtn-active-to)',
        'operateBtn-active-from':'var(--operateBtn-active-from)',

        'question-text':'var(--question-text)',

        'option-correct-bg':'var(--option-correct-bg)',
        'option-correct-focus':'var(--option-correct-focus)',
        'option-correct-border':'var(--option-correct-border)',
        'option-incorrect-bg':'var(--option-incorrect-bg)',
        'option-incorrect-focus':'var(--option-incorrect-focus)',
        'option-incorrect-border':'var(--option-incorrect-border)',
        'option-focus':'var(--option-focus)',
        'option-disable-bg':'var(--option-disable-bg)',
        'option-enable-bg':'var(--option-enable-bg)',
        'option-disable-text':'var(--option-disable-text)',
        'option-enable-text':'var(--option-enable-text)',

        'option-enable-border':'var(--option-enable-border)',
        'option-disable-border':'var(--option-disable-border)',
        'option-correct-border':'var(--option-correct-border)',
        'option-incorrect-border':'var(--option-incorrect-border)',
        'option-enable-hover-border':'var(--option-enable-hover-border)',
        'option-disable-hover-border':'var(--option-disable-hover-border)',
        'option-correct-hover-border':'var(--option-correct-hover-border)',
        'option-incorrect-hover-border':'var(--option-incorrect-hover-border)',

        'gameWin-panel':'var(--gameWin-panel)',
        'gameWin-panel-heading':'var(--gameWin-panel-heading)',
        'gameWin-score-head':'var(--gameWin-score-head)',
        'gameWin-score-num':'var(--gameWin-score-num)',
        'gameWin-status':'var(--gameWin-status)',
        'gameWin-status-panel':'var(--gameWin-status-panel)',
        'gameWin-status-load':'var(--gameWin-status-load)',
        'gameWin-status-message':'var(--gameWin-status-message)',
        'gameWin-retryBtn-bg':'var(--gameWin-retryBtn-bg)',
        'gameWin-retryBtn-text':'var(--gameWin-retryBtn-text)',
        'gameWin-retryBtn-hover':'var(--gameWin-retryBtn-hover)',
        'gameWin-retryBtn-focus':'var(--gameWin-retryBtn-focus)',

        'gameLos-panel':'var(--gameLos-panel)',
        'gameLos-trophy':'var(--gameLos-trophy)',
        'gameLos-frown':'var(--gameLos-frown)',
        'gameLos-panel-head':'var(--gameLos-panel-head)',
        'gameLos-panel-subhead':'var(--gameLos-panel-subhead)',
        'gameLos-score':'var(--gameLos-score)',
        'gameLos-status':'var(--gameLos-status)',
        'gameLos-status-text':'var(--gameLos-status-text)',
        'gameLos-status-score':'var(--gameLos-status-score)',
        'gameLos-status-total':'var(--gameLos-status-total)',
        'gameLos-status-money':'var(--gameLos-status-money)',

        'form-bg':'var(--form-bg)',
        'form-border':'var(--form-border)',
        'form-style-shade':'var(--form-style-shade)',
        'form-head':'var(--form-head)',
        'form-textfield':'var(--form-textfield)',
        'form-button-from-hover':'var(--form-button-from-hover)',
        'form-button-to-hover':'var(--form-button-to-hover)',
        'form--fields-text':'var(--form--fields-text)'
      }
    },
  },
  plugins: [],
}

