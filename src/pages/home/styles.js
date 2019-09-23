import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;

    button, input {
        font-size: 1.3em;
        padding: 5px 10px;
    }

    button {
        border-radius: 0px 4px 4px 0px;
        border: 2px solid #0485ff;
        background-color: #0485ff;
        color: white;
        cursor: pointer;

    }

    input {
        border-radius: 4px 0px 0px 4px;
        width: 60%;
        text-align: left;
        border: 2px solid #eeeeee;
        background-color: #eeeeee;
        outline: none;
    }

    .input-container {
        flex: 1;
        background-color: #aaa;
        padding: 8px;
        
    }

    .qrcode-container {
        background-color: #aaa;
    }

`;