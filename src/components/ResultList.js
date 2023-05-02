function ResultCard({resultItem}) {
    return (
        <div className="row resultCard">
            <h3>{resultItem.name}</h3>
            <p>{resultItem.type}</p>
            <p>{resultItem.link}</p>
        </div>
    );
}


function ResultList({resultObj}) {
    const resultItems = resultObj.map((resultItem, index) => <ResultCard resultItem={resultItem} key={index}/>);
    return (
        <div className="results">
            {resultItems}
        </div>
    );
}

export default ResultList;