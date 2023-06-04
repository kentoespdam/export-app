export interface IPeriode {
	periode: string;
}
class PeriodeHelper {
	public getListPeriode(): IPeriode[] {
		const date = new Date();
		const th = date.getFullYear();
		const aPeriode: IPeriode[] = [];
		for (let i = 12; i >= 1; i--) {
			const sBln = i < 10 ? `0${i}` : i;
			aPeriode.push({ periode: `${th - 1}${sBln}` });
			if (i <= date.getMonth())
				aPeriode.push({ periode: `${th}${sBln}` });
		}
		return aPeriode.sort((a, b) => {
			if (a.periode < b.periode) return -1;
			if (a.periode > b.periode) return 1;
			return 0;
		});
	}

	public currentPeriode(): number {
		const date = new Date();
		const th = date.getFullYear();
		const bl = date.getMonth();
		const blnString = bl < 10 ? `0${bl}` : bl;
		return Number(`${th}${blnString}`);
	}
}
export default new PeriodeHelper();
