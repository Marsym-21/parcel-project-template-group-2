import axios from "axios";
import Notiflix from "notiflix";

const btnMoreElem = document.querySelector('seemore__btn');

btnMoreElem.addEventListener('click', loadMoreElem);

// let currentPage = 1;
// if the category ids not FileSystemHandle, show the following msg "return Notiflix.Notify.warning(`Sorry, there are no books found in this category. Please try again.`) 
// searchQuery = event.currentTarget.searchQuery.value.trim();

const loadMoreElem = async (e) => {
    try {
        const response = await fetch('https://books-backend.p.goit.global/books/category-list');
        const caegoryList = await response.json();
        } 
        catch (error) {
            console.error('Error', error);
        }
};
