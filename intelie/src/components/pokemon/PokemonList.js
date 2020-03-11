import React, { Component} from 'react'
import PokemonCard from '../pokemon/PokemonCard'
import axios from 'axios'
import Paginate from '../layout/Paginate'



export default class PokemonList extends Component {


    state = {
        url: `https://pokeapi.co/api/v2/pokemon/`,
        pokemon: null,
        previous: null,
        next: null,


    }
    request = async () => {
        const res = await axios.get(this.state.url);
        this.setState({ pokemon: res.data['results'], previous: res.data['previous'], next: res.data['next'] });
    }
    componentDidMount() {
        this.request();
    }

    handleClickNext = async () => {
        await this.setState({previous:this.state.url, url: this.state.next });
        this.request();
    };
    handleClickPrevious = async () => {
        if(this.state.previous){
        await this.setState({next:this.state.url, url: this.state.previous });
        this.request();
        }
    };

    render() {

        return (
            <React.Fragment>
                {this.state.pokemon ? (<div className='row'>
                    {this.state.pokemon.map(pokemon =>
                        <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />)}
                 </div> ) : <h1>Carregando</h1>}
                 <Paginate key={'key'} next={this.handleClickNext} previous={this.handleClickPrevious}/>
                
                
            
            </React.Fragment>



        )
    }
} 
