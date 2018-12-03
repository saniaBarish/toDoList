import { handleActions, createAction } from "redux-actions";
import initialData from "../initialData"
import get from 'lodash/get';
import { createSelector } from 'reselect';

const _= require("lodash");
export const addList = createAction("ADD_LIST");
export const addNote = createAction("ADD_NOTE");
export const deleteList = createAction("DELETE_LIST");
export const editList = createAction("EDIT_LIST");
export const editNote = createAction("EDIT_NOTE");
export const deleteNote = createAction("DELETE_NOTE");
export const transferNote = createAction("TRANSFER_NOTE");
export const changeStateNote = createAction("CHANGE_STATE_NOTE");
export const changeStateList = createAction("CHANGE_STATE_LIST");



export default handleActions({
    [addList]: ({lists, notes}, {payload: name}) => ({
        lists: [...lists, {
            id: +_.uniqueId(),
            name: name,
            isOpen: false
        }],
        notes: notes
    }),

    [addNote]: ({lists, notes},{payload: {discription, listId}}) => ({
        lists: lists,
        notes: [...notes, {
            id: +_.uniqueId(),
            discription: discription,
            listId: +listId,
            isOpen: false
        }]
    }),

    [deleteList]: ({lists, notes},{payload: listId}) => ({
        lists: lists.filter(list => list.id !== listId),
        notes: notes.filter(note => note.listId !== listId)
    }),

    [editList]: ({lists, notes}, {payload: {id, name}}) => ({
        lists: lists.map(list => {
            if (list.id === id){
                list.name = name
                return list
            }
            return list
        }),

        notes: notes
    }),

    [editNote]: ({lists, notes},{payload: {id, discription}}) => ({
        lists: lists,
        notes: notes.map(note => {
            if (note.id === id){
                note.discription = discription
                return note
            }
            return note
        })
    }),

    [deleteNote]: ({lists, notes},{payload: id}) => ({
        lists:lists,
        notes: notes.filter(note => note.id !== id)
    }),

    [transferNote]: ({lists, notes}, {payload:{id, listId}}) => ({
        lists: lists,
        notes: notes.map(note => {
            if (note.id === id){
                note.listId = +listId;
                return note
            }
            return note
        })
    }),
    [changeStateNote]: ({lists, notes},{payload: id}) => ({
        lists: lists,
        notes: notes.map(note => {
            if (note.id === id){
                note.isOpen = !note.isOpen
                return note
            }
            return note
        })
    }),
    [changeStateList]: ({lists, notes},{payload: id}) => ({
        lists: lists.map(list => {
            if (list.id === id){
                list.isOpen = !list.isOpen
                return list
            }
            return list
        }),
        notes: notes
    })

},initialData
)
const REDUCER_NAME = "cardList";

export const stateSelector = (state) => get(state, REDUCER_NAME);
export const listsSelector = createSelector(stateSelector, (state)=> get(state,"lists"));
export const notesSelector = createSelector(stateSelector, (state) => get(state,"notes"));