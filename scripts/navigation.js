// Переход на страницу покупки
function goToBuy() {
  window.location.href = "buy.html";
}

// Переход на страницу продажи
function goToSell() {
  window.location.href = "sell.html";
}

// Возврат на главную страницу
function goToIndex() {
  if (window.history.length > 1) {
    window.history.back(); // Возвращает на предыдущую страницу
  } else {
    window.location.href = "index.html"; // Если истории нет, переходим на index.html
  }
}

// Переход на страницу деталей канала
function goToBuyDetail() {
  window.location.href = "buy-detail.html";
}

// Возврат на страницу покупки
function goBackToBuy() {
  if (window.history.length > 1) {
    window.history.back(); // Возвращает на предыдущую страницу
  } else {
    window.location.href = "buy.html"; // Если истории нет, переходим на buy.html
  }
}