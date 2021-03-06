import ClassInfo from './containers/ClassInfo/ClassInfo';
import StudyInfo from './containers/StudyInfo/StudyInfo';
import StudentList from './containers/StudentList/StudentList';
import HomeworkReview from './containers/HomeworkReview/HomeworkReview';
import App from './App';


const routes = [{
    path: '/',
    component: App,
    indexRoute: { component: StudentList },
    childRoutes: [
        { path: 'studyInfo(/:id)', component: StudyInfo },
        { path: 'studentList(/:id)', component: StudentList },
        { path: 'classInfo-:mid-:nick', component: ClassInfo },
        { path: 'homeworkReview', component: HomeworkReview, }
    ]
}]

export default routes;