import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [typeFilter, setTypeFilter] = useState('All')

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
      .then(resp => resp.json())
      .then(data => setStocks(data))
  }, [])

  const filteredStocks = stocks.filter(stock => {
    return stock.type === typeFilter || typeFilter === 'All'
  })

  return (
    <div>
      <SearchBar
        setTypeFilter={setTypeFilter} />
      <div className="row">
        <div className="col-8">
          <StockContainer
            stocks={filteredStocks} />
        </div>
        <div className="col-4">
          <PortfolioContainer />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
