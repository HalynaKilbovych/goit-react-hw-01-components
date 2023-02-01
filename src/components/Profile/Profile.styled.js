import styled from 'styled-components';

export const ProfileWrapper = styled.div`
   width: calc((100% - 30px) / 4);
   background-color: beige;
   border-radius: 3px;
   padding: 30px;
`

export const Description = styled.div`
    width: 100%;
    text-align: center;
`

export const Avatar = styled.img`
    display: block;
    background-color: white;
    border-radius: 50%;
    width: 100px;
    margin: 0 auto;

`
export const Name = styled.p`
    font-size: 20px;
    font-weight: 700;
`

export const Tag = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: gray;
`

export const Location = styled.p`
    font-size: 16px;
    font-weight: 500;
`

export const StatsList = styled.ul`
    display: flex;
    gap: 10px;
    list-style: none;
    margin: 0 auto;
`

export const StatsItem = styled.li`
    width: calc((100% - 30px) / 3); 
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ghostwhite;
    border-radius: 3px;
    padding: 10px;
`

export const StatsLabel = styled.span`
    font-size: 14px;
    font-weight: 500;
`

export const StatsQuantity = styled.span`
    font-size: 16px;
    font-weight: 700;
`

