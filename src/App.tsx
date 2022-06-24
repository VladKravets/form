import React, {ChangeEvent, useState} from 'react';
import './App.css';

function App() {

    const [userInfo, setUserInfo] = useState('')
    const [userNameError, setUserNameError] = useState('')


    // async function onSubmit(values: {}) {
    //     console.log(values)
    //
    //     const response = await fetch('http://localhost:3000/server', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(values)
    //     })
    //     const result = await response.json()
    // }

    const userInfoHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUserInfo(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 30) {
            setUserNameError('Имя не может быть длиннее 3 букв и меньше 30')
        if (!e.target.value){
setUserNameError('Поле не может быть пустым')
        }

        }else {
            setUserNameError('')
        }

    }

    return (
        <div className="App">
            <form action="#" className="form">
                <h1>Форма обратной связи</h1>
                <div className="form__field">
                    <input
                        onChange={event => userInfoHandler(event)}
                        type="text"
                        pattern="^[a-zA-Z0-9]+$"
                        name="name"
                        placeholder="Фамилия и имя*" required

                    />
                    <span className="form__error">Это поле должно содержать только латинские буквы</span>

                </div>
                <div className="form__field">
                    <input type="email" name="name" placeholder="E-Mail"/>
                    <span className="form__error">Это поле должно содержать E-Mail в формате example@site.com</span>
                </div>
                <div className="form__field">
                    <input
                        type="tel" name="name" placeholder="Телефон"
                        pattern="[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}" minLength={18} maxLength={18}/>
                    <span
                        className="form__error">Это поле должно содержать телефон в формате +7 (XXX*) 000-00-00.  *-код региона</span>
                </div>
                <div className="form__field">
                    <input type="url" name="name" placeholder="Ваша дата рождения"/>
                    {/*<span className="form__error"></span>*/}
                </div>
                <div className="form__field">
                    <textarea placeholder={'Введите сообщение...'}></textarea>
                </div>
                <button type="submit">Отправить</button>
            </form>
        </div>
    )
}

export default App;
