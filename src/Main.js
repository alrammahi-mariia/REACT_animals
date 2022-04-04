




State = {animals: animals};

addLikeHandler =(name) => {
    this.setState((state) => {
        const updatedAnimalsList = state.animals.map((animal) => {
            if(animal.name === name) {
                return {...animal, likes: animal.likes + 1};
            } else {
                return animal;
            }
        });
        return {
            animals: updatedAnimalsList,
        };
    });
};

render() {
    return (
        <div className="animalsList">
            {this.state.animals.map((animal) => (
                <AnimalCard
                    key={animal.name}
                    title={animal.name}
                    likes={animal.likes}
                    add={() => this.addLikeHandler(animal.name)}
                    />
            ))}
        </div>
    );    
}