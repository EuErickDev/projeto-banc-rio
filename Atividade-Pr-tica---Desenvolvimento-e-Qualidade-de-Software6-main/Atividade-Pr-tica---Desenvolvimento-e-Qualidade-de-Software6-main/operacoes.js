const initialAccountState = {
  balance: 2847.50,
  transactions: []
};

function getAccountState() {
  try {
    const savedState = JSON.parse(localStorage.getItem('accountState'));
    if (savedState && typeof savedState.balance === 'number' && Array.isArray(savedState.transactions)) {
      return savedState;
    }
  } catch (error) {
    localStorage.removeItem('accountState');
  }

  localStorage.setItem('accountState', JSON.stringify(initialAccountState));
  return { ...initialAccountState, transactions: [] };
}

function saveAccountState(state) {
  localStorage.setItem('accountState', JSON.stringify(state));
}

function formatCurrency(value) {
  return Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function showOperationFeedback(message, type = 'success') {
  const feedback = document.getElementById('feedback');
  feedback.textContent = message;
  feedback.classList.add('is-visible');
  feedback.classList.toggle('feedback-error', type === 'error');
}

function setupDebitOperation(formId, amountId, operation) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const amount = Number(document.getElementById(amountId).value);
    const state = getAccountState();

    if (!Number.isFinite(amount) || amount <= 0) {
      showOperationFeedback('Informe um valor válido maior que zero.', 'error');
      return;
    }

    if (amount > state.balance) {
      showOperationFeedback(`Saldo insuficiente. Disponível: ${formatCurrency(state.balance)}.`, 'error');
      return;
    }

    form.classList.add('is-hidden');
    const confirmation = document.createElement('div');
    confirmation.className = 'confirmation-box';
    confirmation.innerHTML = `
      <div class="confirmation-icon"><i class="fas fa-lock" aria-hidden="true"></i></div>
      <h2>Confirme sua operação</h2>
      <p>Você está realizando ${operation.label} no valor de <strong>${formatCurrency(amount)}</strong>.</p>
      <label for="transactionPin">Senha de confirmação</label>
      <input id="transactionPin" type="password" inputmode="numeric" autocomplete="one-time-code" maxlength="6" pattern="[0-9]{6}" placeholder="Digite 6 dígitos" aria-describedby="pinHint">
      <small id="pinHint">Informe sua senha numérica de 6 dígitos para concluir.</small>
      <button class="submit-button" type="button" id="confirmOperation">Confirmar ${operation.label} <i class="fas fa-check"></i></button>
      <button class="cancel-button" type="button" id="cancelOperation">Voltar e revisar</button>
      <div class="feedback" id="confirmationFeedback" role="alert"></div>
    `;
    form.parentElement.appendChild(confirmation);

    const pinInput = confirmation.querySelector('#transactionPin');
    const confirmationFeedback = confirmation.querySelector('#confirmationFeedback');
    pinInput.focus();

    confirmation.querySelector('#cancelOperation').addEventListener('click', function() {
      confirmation.remove();
      form.classList.remove('is-hidden');
    });

    confirmation.querySelector('#confirmOperation').addEventListener('click', function() {
      const pin = pinInput.value.trim();
      if (!/^\d{6}$/.test(pin)) {
        confirmationFeedback.textContent = 'A senha deve conter exatamente 6 dígitos.';
        confirmationFeedback.classList.add('is-visible', 'feedback-error');
        pinInput.focus();
        return;
      }

      const currentState = getAccountState();
      if (amount > currentState.balance) {
        confirmationFeedback.textContent = 'O saldo mudou. Atualize a página e tente novamente.';
        confirmationFeedback.classList.add('is-visible', 'feedback-error');
        return;
      }

      currentState.balance = Number((currentState.balance - amount).toFixed(2));
      currentState.transactions.unshift({
        id: `${Date.now()}-${operation.type}`,
        type: operation.type,
        title: operation.title,
        description: operation.description(),
        amount: -amount,
        date: new Date().toLocaleDateString('pt-BR')
      });
      saveAccountState(currentState);
      confirmation.innerHTML = `
        <div class="confirmation-icon success"><i class="fas fa-check" aria-hidden="true"></i></div>
        <h2>Operação concluída</h2>
        <p>${operation.successMessage(formatCurrency(amount))}</p>
        <a class="submit-button confirmation-link" href="painel.html">Voltar ao painel <i class="fas fa-arrow-right"></i></a>
      `;
    });
  });
}
