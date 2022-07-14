#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <sys/stat.h>
#include <signal.h>

#define BUF_SIZE 1024

void reset()
{
	printf("\033[0m");
}

static void handler(int signum)
{
	reset();
}

int rgbPrint(FILE *file, int r, int g, int b)
{
	char buf;
	buf = fgetc(file);

	if(buf != EOF)
	{
		printf("\033[38;2;%d;%d;%dm%c", r, g, b, buf);
		return 0;
	}
	else
	{
		return 1;
	}
}

int main(int argc, char *argv[])
{

	struct sigaction sa;
	sa.sa_handler = reset;
	sigemptyset(&sa.sa_mask);

	FILE * fileRead;
	if(argc > 1){
		char *filename = argv[1];

		struct stat sb;
		if(stat(filename, &sb) == 0 && S_ISDIR(sb.st_mode))
		{
			fprintf(stderr, "Err: '%s' is a directory\n", filename);
			return 1;
		}

		fileRead = fopen(filename, "r");
		if(fileRead == NULL){
			fprintf(stderr, "Err: failed to open file!\n");
			return 1;
		}
	}
	else
	{
		fileRead = stdin;
		if(fileRead == NULL)
		{
			fprintf(stderr, "Err: error reading from stdin");
			return 1;
		}
	}

	char buf;
	int r, g, b;

	int i;

	while(1){
		for(i = 2; i <= 255; i++)
		{
			int stat = rgbPrint(fileRead, 255, i, 0);
			if(stat == 1){
				reset();
				return 0;
			}
		}

		for(i = 255; i >= 0; i--)
		{
			int stat = rgbPrint(fileRead, i, 255, 0);
			if(stat == 1){
				reset();
				return 0;
			}
		}
		for(i = 1; i <= 255; i++)
		{
			int stat = rgbPrint(fileRead, 0, 255, i);
			if(stat == 1){
				reset();
				return 0;
			}
		}
		for(i = 255; i >= 0; i--)
		{
			int stat = rgbPrint(fileRead, 0, i, 255);
			if(stat == 1){
				reset();
				return 0;
			}


		}
		for(i = 1; i <= 255; i++)
		{
			int stat = rgbPrint(fileRead, i, 0, 255);
			if(stat == 1){
				reset();
				return 0;
			}

		}
		for(i = 255; i >= 0; i--)
		{

			int stat = rgbPrint(fileRead, 255, 0, i);
			if(stat == 1){
				reset();
				return 0;
			}

		}

	}


	fclose(fileRead);
}
