import { Controller, Get, Query, Headers, UnauthorizedException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable, map } from 'rxjs';


@Controller('words')
export class WordsController {
  constructor(private readonly httpService: HttpService) {}

  @Get()
  getWord(
    @Query('word') word: string,
    @Headers('Authorization') authHeader: string
  ): Observable<any> {
    if (authHeader !== `Bearer ${process.env.STATIC_API_KEY}`) {
      throw new UnauthorizedException('Invalid API Key');
    }

    const url = `https://wordsapiv1.p.rapidapi.com/words/${word}`;
    return this.httpService.get(url, {
      headers: {
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
      },
    }).pipe(
      map(response => response.data)
    );
  }
}
