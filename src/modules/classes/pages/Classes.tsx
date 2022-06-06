/* eslint-disable @typescript-eslint/no-use-before-define */
import { AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-blue.css'

import callAxios from '../../../utils/axios'
import '../Classes.scss'
import { APIDeleteClass, APIGetAllClasses, APIPostClass } from '../../../api/classes'
import { CreateClassDTO, GetClassDTO } from '../../../utils/models/dto/classDTO'
import { errorToast } from '../../../utils/toast'

const Classes = () => {
	const columnDefs = [
		{ headerName: 'S.N', field: 'id', width: 100 },
		{ headerName: 'ClassName', field: 'name', flex: 1, editable: true },
		{
			headerName: 'Action',
			field: 'id',
			cellRenderer: () => (
				<div>
					<button type='button' className='action-btn' onClick={deleteClass}>
						<i className='fa-solid fa-trash-can' />
						Remove
					</button>
				</div>
			),
			width: 200,
		},
	];


	const defaultColDef = {
		sortable: true,
		filter: true,
	}
	const onGridReady = async (params: any) => {
		// callAxios({ method: 'GET', url: 'classes' }).then(res => {
		// 	params.api.applyTransaction({ add: res.data.classes })
		// })
			try{
					const res = await APIGetAllClasses();
		params.api.applyTransaction({ add: GetClassDTO(res?.data?.classes ?? []) })
			}catch(e){
				errorToast(e);
			}
	}

	const addClass = async ()=>{
		const res = await APIPostClass(CreateClassDTO(data));
	}
	const deleteClass = async ()=>{
		const res = await APIDeleteClass(id);
	}
	return (
		<div className='classes'>
			<div className='classes-container'>
				<div className='head'>
					<div className='title'>Classes</div>
					<div className='btn'>Add Classes</div>
				</div>
				<div className='main'>
					<div className='ag-theme-blue' style={{ width: 800, height: 400 }}>
						<AgGridReact
							defaultColDef={defaultColDef}
							columnDefs={columnDefs}
							onGridReady={onGridReady}
							pagination
							paginationPageSize={14}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Classes
