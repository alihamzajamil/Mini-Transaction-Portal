
export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      
      return {
        history: state.history.filter((transaction) => transaction.id !== action.payload.id),
        account: {"id": Date.now(),"balance":balance, "expense":expense, "income":income},
      };
      
    case "ADD_TRANSACTION":
      
      const{transaction_amount} = action.payload;
      var{balance, income, expense} = state.account;

      if(transaction_amount>=0){
        income += transaction_amount; 
      }
      else{
        expense -= transaction_amount; 
      }
      balance = income-expense;
      
      return {
        history: [action.payload, ...state.history],
        account: {"id": Date.now(),"balance":balance, "expense":expense, "income":income},
      };

    default:
      return state;
  }
};
