// /* eslint-disable no-undef */
// /* eslint-disable import/order */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable no-console */
// /* eslint-disable @typescript-eslint/no-use-before-define */
// import { AgGridReact } from 'ag-grid-react'

// import 'ag-grid-community/dist/styles/ag-grid.css'
// import 'ag-grid-community/dist/styles/ag-theme-blue.css'

// import '../Classes.scss'
// // import { APIDeleteClass, APIGetAllClasses, APIPostClass } from '../../../api/classes'
// // import { CreateClassDTO, GetClassDTO } from '../../../utils/models/dto/classDTO'
// // import { errorToast } from '../../../utils/toast'
// // import callAxios from '../../../utils/axios'
// import { APIDeleteClass, APIGetAllClasses } from '../../../api/classes'
// import { GetClassDTO } from '../../../utils/models/dto/classDTO'
// import { useEffect } from 'react'
// // import callAxios from '../../../utils/axios'

// const Classes = () => {
// 	// const [rowData,setRowData]=useState([]);
// 	// const [gridApi,setGridApi]=useState();

// 	// const actionButtonHandler = (params: any) => {
//     //     const selectedRows = params.api.getSelectedRows()
//     //     callAxios({
//     //         method:"GET",
//     //         url:`exam/remove/${params.data.id}`,
//     //         data:selectedRows,

//     //     }).then(response=>response.data.exam)

//     //     params.api.applyTransaction({ remove: selectedRows })

//     // }
// 	const columnDefs= [
// 		{ headerName: 'S.N', field: 'id', width: 100,cellRenderer: (params: any) => parseInt(params.node.id, 10) + 1, },
// 		{ headerName: 'ClassName', field: 'name', flex: 1, editable: true },
// 		{
// 			headerName: 'Action',
// 			field: 'id',
// 			cellRendererFramework: (params: any) => (
// 				<div
// 				style={{ cursor: 'pointer' }}
// 				aria-hidden='true'
// 				onClick={() => deleteClass(params.data.id)}
// 			>
// 				<button
// 					type='button'
// 					style={{ all: 'unset', cursor: 'pointer', fontSize: 17 }}
// 				>
// 					<i className='fa-solid fa-trash-can' />
// 				</button>
// 				<span>Remove</span>
// 			</div>
// 			),
// 			width: 200,
// 		},
// 	];

// 	const defaultColDef = {
// 		sortable: true,
// 		filter: true,
// 	}

// // useEffect(()=>{
// // 	callAxios({ method: 'GET', url: 'classes' })
// // 	.then((res) => setRowData(res.data.classes));
// // 	}
// // ,[])
// // const onGridReady=(params:any)=>{
// // 	setGridApi(params.api)
// // }

// // useEffect(() => {
// // 	callAxios({
// // 		method: 'GET',
// // 		url: 'classes',
// // 	}).then(response => setRowData(response.data.classes))
// // }, [])

// const addClassesHandler=()=>{

// }

// // const deleteHandler=()=>{

// // 	const selectedRow=gridApi.getSelectedRows();
// // 	console.log(selectedRow[0].id);

// // 	const idd=selectedRow[0].id;
// // 	gridApi.applyTransaction({remove:selectedRow})

// // 	// eslint-disable-next-line no-template-curly-in-string
// // 	callAxios({method:'DELETE',url:`classes/remove/${idd}`,data:selectedRow})

// // }

// // const addHandler=()=>{
// // 	gridApi.applyTransaction({add:[{}]})
// // }

// 	// const onGridReady = async () => {
// 	// 	// callAxios({ method: 'GET', url: 'classes' }).then(res => {
// 	// 	// 	params.api.applyTransaction({ add: res.data.classes })
// 	// 	// })
// 	// 		// try{

// 	// 				const res = await APIGetAllClasses();
// 	// 				console.log(res.data.classes[0]);
// 	// 	// params.api.applyTransaction({ add: GetClassDTO(res.data.classes) })
// 	// 		// }catch(e){
// 	// 		// 	// errorToast(e);

// 	// 		// }
// 	// }

// 	const get=async(params:any)=>{
// 		const res =await APIGetAllClasses();
// 		console.log(res);
// 		params.api.applyTransaction({ add: GetClassDTO(res) })
// 	}
// useEffect(()=>{get(params:any)},[])
// 	// const addClass = async ()=>{
// 	// 	const res = await APIPostClass(CreateClassDTO(data));
// 	// }
// 	const deleteClass = async (params:any)=>{
// 		const res = await APIDeleteClass(params);
// 		console.log(params);
// 		console.log(res);
// 	}

// 	// useEffect(() => {
//     //     callAxios({
//     //         method: 'GET',
//     //         url: 'classes',
//     //     }).then(response => setRowData(response.data.classes))
//     // }, [])

// 	return (
// 		<div className='classes'>
// 			<div className='classes-container'>
// 				<div className='head'>
// 					<div className='title'>Classes</div>
// 					<div className='btn' aria-hidden onClick={addClassesHandler}>Add Classes</div>
// 				</div>
// 				<div className='main'>
// 					<div className='ag-theme-blue' style={{ width: 800, height: 400 }}>
// 						<AgGridReact
// 							defaultColDef={defaultColDef}
// 							columnDefs={columnDefs}
// 							// rowData={rowData}
// 							// onGridReady={onGridReady}
// 							pagination
// 							paginationPageSize={14}
// 							rowSelection='multiple'
// 							// onCellValueChanged={cellValueChanged}
// 						/>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }
// export default Classes

/* eslint-disable no-console */
// const ExamPage=()=>(
//     <h4>This is  Exam  Page</h4>
// )
// export default ExamPage;

import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-blue.css'
import { AiOutlineDelete } from 'react-icons/ai'
import '../Classes.scss'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import {  CellValueChangedEvent} from 'ag-grid-community'
import { errorToast, successToast } from '../../../utils/toast'
import callAxios from '../../../utils/axios'

export const Classes = () => {
	const warning = () => {
		toast('Deleted Successfully', errorToast)
	}

	const actionButtonHandler = (params: any) => {
		const selectedRows = params.api.getSelectedRows()
		params.api.applyTransaction({ remove: selectedRows })
		callAxios({
			method: 'GET',
			url: `class/remove/${params.data.id}`,
			data: selectedRows,
		}).then(response => response.data.classes)

		warning()
	}
	const success = () => {
		toast('Success Successfully', successToast)
	}
	const isColumn = [
		{
			headerName: 'S.N',
			field: 'sn',
			editable: false,
			width: 80,
			cellRenderer: (params: any) => parseInt(params.node.id, 10) + 1,
		},
		{ headerName: 'ClassName', field: 'name', flex: 1 },

		{
			headerName: 'Action',
			field: 'action',
			flex: 1,
			cellRenderer: (params: any) => (
				<div
					style={{ cursor: 'pointer' }}
					aria-hidden='true'
					onClick={() => actionButtonHandler(params)}
				>
					<button
						type='button'
						style={{ all: 'unset', cursor: 'pointer', fontSize: 17 }}
					>
						<AiOutlineDelete />
					</button>
					<span>Remove</span>
				</div>
			),
		},
	]

	const defaultColumnDefs = {
		sortable: true,
		editable: true,
		filter: true,
	}

	const rowSelect = 'multiple'

	const [isRow, setRowData] = useState([
		{
			name: '',
		},
	])

	const addClassesHandler = () => {
		const newDataCell = [
			{
				name: '',
			},
		]
		const added = [...isRow, ...newDataCell]
		setRowData(added)
	}

	useEffect(() => {
		callAxios({
			method: 'GET',
			url: 'classes',
		}).then(response => setRowData(response.data.classes))
	}, [])

	const cellValueChange = useCallback((event: CellValueChangedEvent) => {
		success()
		let val = event.data
		if (event.data.id != null) {
			callAxios({
				method:"POST",
				url: `class/edit/${event.data.id}`,
				data: val,
			}).then(response => {
				val = response.data.classes
			})
		} else {
			callAxios({
				method: "POST",
				url: 'class/store',
				data: val,
			})
				.then(Response => console.log(
					Response.data.class))
				.catch(error => console.log(error))
		}
	}, [])
	return (
		<div className='classes'>
			<div className='classes-container'>
				<div className='head'>
					<div className='title'>Classes</div>
					<div className='btn' aria-hidden onClick={addClassesHandler}>
						Add Classes
					</div>
				</div>
				<div className='main'>
					<div className='ag-theme-blue' style={{ width: 800, height: 400 }}>
						<AgGridReact
							rowData={isRow}
							columnDefs={isColumn}
							defaultColDef={defaultColumnDefs}
							rowSelection={rowSelect}
							rowMultiSelectWithClick
							onCellValueChanged={cellValueChange}
	/>
					</div>
				</div>
			</div>
		</div>
	)
}

// <div className='exam-wrapper'>
//     <div className='top-exam-area'>
//         <div className='exam-title'>Class</div>
//         <button type='button' className='add-exam-button' onClick={addClassesHandler}>
//             Add Exam
//         </button>
//     </div>
//     <div
//         className='ag-theme-blue  row-container'
//         style={{ height: 400, width: 900 }}
//     >
//         <AgGridReact
//             rowData={isRow}
//             columnDefs={isColumn}
//             defaultColDef={defaultColumnDefs}
//             rowSelection={rowSelect}
//             rowMultiSelectWithClick
//             onCellValueChanged={cellValueChanged}
//         />
//     </div>
// </div>
// 	)
// }
