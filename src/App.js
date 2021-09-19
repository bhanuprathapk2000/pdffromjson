import { useEffect } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import onBoardingData from './onboarding';

export default function App() {
	const {
		basicInfo,
		bussinessInfo,
		personalInfo,
		bankInfo,
		authoriserInfo,
		insalesInfo,
	} = onBoardingData || {};

	useEffect(() => {
		const pdfDownload = () => {
			const doc = new jsPDF();
			doc.text('Basic Info', 14, 10);
			doc.autoTable({
				head: [['FieldName', 'FieldValue']],
				body: Object.keys(basicInfo).map((element) => [
					element,
					basicInfo[element],
				]),
				columnStyles: {
					0: { cellWidth: 60 },
					1: { cellWidth: 100 },
				},
				startY: 10,
				rowPageBreak: 'auto',
				bodyStyles: { valign: 'top' },
			});
			//
			doc.text('Business Info', 14, doc.lastAutoTable.finalY + 10);
			doc.autoTable({
				head: [['FieldName', 'FieldValue']],
				body: Object.keys(bussinessInfo).map((element) => [
					element,
					bussinessInfo[element],
				]),
				columnStyles: {
					0: { cellWidth: 60 },
					1: { cellWidth: 100 },
				},
				startY: doc.lastAutoTable.finalY + 15,
				rowPageBreak: 'auto',
				bodyStyles: { valign: 'top' },
			});
			doc.text('Personal Info', 14, doc.lastAutoTable.finalY + 10);
			doc.autoTable({
				head: [['FieldName', 'FieldValue']],
				body: Object.keys(personalInfo).map((element) => [
					element,
					personalInfo[element],
				]),
				columnStyles: {
					0: { cellWidth: 60 },
					1: { cellWidth: 100 },
				},
				startY: doc.lastAutoTable.finalY + 15,
				rowPageBreak: 'auto',
				bodyStyles: { valign: 'top' },
			});
			doc.text('Bank Info', 14, doc.lastAutoTable.finalY + 10);
			doc.autoTable({
				head: [['FieldName', 'FieldValue']],
				body: Object.keys(bankInfo).map((element) => [
					element,
					bankInfo[element],
				]),
				columnStyles: {
					0: { cellWidth: 60 },
					1: { cellWidth: 100 },
				},
				startY: doc.lastAutoTable.finalY + 15,
				rowPageBreak: 'auto',
				bodyStyles: { valign: 'top' },
			});

			doc.text('Authoriser Info', 14, doc.lastAutoTable.finalY + 10);

			authoriserInfo.authorisers.map((authoriser, index) => {
				doc.text(`Authoriser ${index}`, 14, doc.lastAutoTable.finalY + 15);
				doc.autoTable({
					head: [['FieldName', 'FieldValue']],
					body: Object.keys(authoriser).map((element) => [
						element,
						authoriser[element],
					]),
					columnStyles: {
						0: { cellWidth: 60 },
						1: { cellWidth: 100 },
					},
					startY: doc.lastAutoTable.finalY + 15,
					rowPageBreak: 'auto',
					bodyStyles: { valign: 'top' },
				});
			});
			doc.text('Insales Info', 14, doc.lastAutoTable.finalY + 10);

			doc.autoTable({
				head: [['FieldName', 'FieldValue']],
				body: Object.keys(insalesInfo).map((element) => [
					element,
					insalesInfo[element],
				]),
				columnStyles: {
					0: { cellWidth: 60 },
					1: { cellWidth: 100 },
				},
				startY: doc.lastAutoTable.finalY + 15,
				rowPageBreak: 'auto',
				bodyStyles: { valign: 'top' },
			});
			doc.save('table.pdf');

			//
		};
		//

		pdfDownload();
	}, []);
	return (
		<div className="App">
			<button>Generate Pdf</button>
		</div>
	);
}
