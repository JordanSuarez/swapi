const render = {
    handleLoader: () => {
        constants.$peoplesButton.append(app.$loader)
        constants.$starshipsButton.append(app.$loader)
        constants.$planetsButton.append(app.$loader)
        constants.$nextPageButton.append(app.$loader)
        constants.$previousPageButton.append(app.$loader)
    },
    handleDisplayCount: (promise, className) => {
        promise.then((data) => {
            console.log(data);
            constants.$loader.remove()
            return $(className).text(data.count)
        })
    },
    handleDisplayNames: (promise, resourceMethod) => {
        render.handleEmptyDataTableContent()
        promise.then((data) => {
            constants.$loader.remove()
            data.results.forEach((result) => {
                resourceMethod(result)
            })
        })
    },
    handleEmptyDataTableContent: () => {
        constants.$wrapperFirstInfo.empty();
        constants.$wrapperSecondInfo.empty();
        constants.$wrapperThirdInfo.empty();
    },
    handleRenderPeoples: (result) => {
        constants.$firstColumnInfo.text('Name')
        constants.$secondColumnInfo.text('Height')
        constants.$thirdColumnInfo.text('Gender')
        constants.$wrapperFirstInfo.append($('<tr>').text(result.name))
        constants.$wrapperSecondInfo.append($('<tr>').text(result.height))
        constants.$wrapperThirdInfo.append($('<tr>').text(result.gender))
    },
    handleRenderStarships: (result) => {
        constants.$firstColumnInfo.text('Name')
        constants.$secondColumnInfo.text('Model')
        constants.$thirdColumnInfo.text('Passenger')
        constants.$wrapperFirstInfo.append($('<tr>').text(result.name))
        constants.$wrapperSecondInfo.append($('<tr>').text(result.model))
        constants.$wrapperThirdInfo.append($('<tr>').text(result.passengers))
    },
    handleRenderPlanets: (result) => {
        constants.$firstColumnInfo.text('Name')
        constants.$secondColumnInfo.text('Climate')
        constants.$thirdColumnInfo.text('Population')
        constants.$wrapperFirstInfo.append($('<tr>').text(result.name))
        constants.$wrapperSecondInfo.append($('<tr>').text(result.climate))
        constants.$wrapperThirdInfo.append($('<tr>').text(result.population))
    },
}