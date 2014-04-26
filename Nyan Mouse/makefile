all: readme.pdf

readme.dvi: readme.tex
	latex readme.tex && rm readme.aux readme.log

readme.pdf: readme.dvi
	dvipdf readme.dvi && rm readme.dvi

clean:
	rm readme.pdf
