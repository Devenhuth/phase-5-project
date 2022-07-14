function Logout({ onLogout }) {

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
      }

    return (
        
            <button className='buttonLogout' onClick={handleLogout}>Logout</button>
        
    )
}

export default Logout;