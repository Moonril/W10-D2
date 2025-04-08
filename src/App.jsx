import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import './App.css'
import NavbarCustom from './components/NavbarCustom'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import libriFantasy from './books/fantasy.json'
import BookListDue from './components/BookListDue'


function App() {

  return (
    <>
        <NavbarCustom tema="dark"/>

        <main className='flex-grow-1 text-center p-3'>
          
          <Welcome />


          <BookListDue arrayOfBooks={libriFantasy} />


        </main>


        <MyFooter />
    </>
  )
}

export default App


// repo Stefano https://github.com/irvelervel/FS0125-hw-2
