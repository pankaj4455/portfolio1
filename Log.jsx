import React from 'react'

const Log =()=>{
    return (
        <>
        <div className='container mt-5 text-lg-center bg-white'>
      <h1>Log in</h1>
        <form action='mailto:pankajyadav3436@gmail.com'method="post">
            <label for="user">username:</label>
            <input type="text" id="user"  name=""/><br/>
            <label for="pass">password:</label>
            <input type="text" id="pass" name=""/><br/>
            <input class='btn' type="submit" value="submit" />

        </form>
        </div>
        
        </>
    )
}
export default Log;
