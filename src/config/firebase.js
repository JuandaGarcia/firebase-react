import firebase from 'firebase/app'
import 'firebase/firestore'

const app = firebase.initializeApp({
	apiKey: 'AIzaSyCwlwuddKheIqWk-1GumlZK6cyNfa-PhG0',
	authDomain: 'fir-react-a7925.firebaseapp.com',
	databaseURL: 'https://fir-react-a7925.firebaseio.com',
	projectId: 'fir-react-a7925',
	storageBucket: 'fir-react-a7925.appspot.com',
	messagingSenderId: '809056884484',
	appId: '1:809056884484:web:9d36c5af1e7b31c9242251',
	measurementId: 'G-2QZ3CSWK21',
})

export const db = firebase.firestore()

export default app
