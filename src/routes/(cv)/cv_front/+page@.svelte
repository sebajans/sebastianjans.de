<div class="book">
	<div class="page">
		<div class="subpage">Page 1/2</div>
	</div>
	<div class="page">
		<div class="subpage">Page 2/2</div>
	</div>
</div>

<style>

	* {
		box-sizing: border-box;
		-moz-box-sizing: border-box;
	}

	.page {
		width: 210mm;
		min-height: 297mm;
		padding: 20mm;
		margin: 10mm auto;
		border: 1px #d3d3d3 solid;
		border-radius: 5px;
		background: white;
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
	}

	.subpage {
		padding: 1cm;
		border: 5px red solid;
		height: 257mm;
		outline: 2cm #ffeaea solid;
	}

	@page {
		size: A4;
		margin: 0;
	}

	@media print {
		.page {
			margin: 0;
			border: initial;
			border-radius: initial;
			width: initial;
			min-height: initial;
			box-shadow: initial;
			background: initial;
			page-break-after: always;
		}
	}
</style>
