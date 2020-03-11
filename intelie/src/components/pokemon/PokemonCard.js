import React, { Component } from 'react'
import styled from 'styled-components';
import {Link as Styled} from 'react-router-dom';
 
const Sprite = styled.img`
    width: 5em;
    height: 5em;
    
`;

const Card = styled.div`
  opacity: 0.95;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
const StyledLink = styled(Styled)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
export default class PokemonCard extends Component {
    state = {
        name: '',
        imageUrl: '',
        pokemonNum: ' '

    }
    componentDidMount() {
        const { name, url } = this.props;
        const pokemonNum = url.split("/")[url.split('/').length - 2]
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonNum}.png?raw=true`
        this.setState({ name, imageUrl, pokemonNum });
    }
    render() {

        return (
            <div className='col-md-3 col-sm-6 mb-5'>
                <StyledLink to= {`pokemon/${this.state.pokemonNum}`}>
                    <Card className='card'>
                        <h5 className='card-header'>{this.state.pokemonNum} </h5>
                        <Sprite className='card-img-top mx-auto mt-2' src={this.state.imageUrl
                        } />
                        <div className="card-body mx-auto">
                            <h6 className="card-title text-capitalize">{this.state.name}</h6>
                        </div>

                    </Card>
                </StyledLink>
            </div>
        )
    }
}
