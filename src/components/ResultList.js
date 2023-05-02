function ResultCard({resultItem}) {
    return (
        <div className="resultCard">
            <div className="row">
            <div className="col-9">
                <h3>{resultItem.name}</h3>
            </div>
            <div className="col-3">
                    <button className="btn btn-outline-success" onClick={()=>navigator.clipboard.writeText(resultItem.link)}>
                        Copy Magnet Link
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                <p>{resultItem.type}</p>
                </div>

            </div>
            <div className="row">
                <br></br>
            </div>
        </div>
    );
}


function ResultList({resultObj}) {
    console.log('ResultList is here', typeof(resultObj), resultObj);
    const resultItems = resultObj.map((resultItem, index) => <ResultCard resultItem={resultItem} key={index}/>);
    console.log(resultItems[0]);

    return (
        <div className="results">
            {resultItems}
        </div>
    );
}

export default ResultList;