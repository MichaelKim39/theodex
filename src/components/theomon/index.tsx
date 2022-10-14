import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Image = styled.img`
    pointer-events: none;
`;

const Screen = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) translate(-150px, -20px);
    height: 120px;
    width: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: '#0E4035';
`;

const NameContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) translate(160px, -35px);
    height: 120px;
    width: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Name = styled.p`
    font-size: 25px;
    color: white;
    font-family: 'pokemon_solid';
`;

interface Props {
    id: number;
}

interface Pokemon {
    name: string;
    height: number;
    weight: number;
    img?: string;
}

const POKEMON_INIT = {
    name: '',
    height: 0,
    weight: 0
};

const Theomon = ({ id }: Props) => {
    const [pokemon, setPokemon] = useState<Pokemon>(POKEMON_INIT);
    const navigate = useNavigate();

    const getPokemonData = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const json = await response.json();
        setPokemon({
            name: json.name,
            height: json.height,
            weight: json.weight,
            img: json.sprites.front_default
        });
    };

    useEffect(() => {
        getPokemonData();
    }, [id]);

    return (
        <>
            <Container>
                <Image
                    src={require('../../images/pokedex-high-res.png')}
                    width="auto"
                    height="500px"
                />
            </Container>
            <Screen
                onClick={() => navigate(`/theomons/${id}`, { state: pokemon })}
            >
                <Image src={pokemon.img} height="150px" width="150px" />
            </Screen>
            <NameContainer>
                <Name>{pokemon['name'].toUpperCase()}</Name>
            </NameContainer>
        </>
    );
};

export default Theomon;
